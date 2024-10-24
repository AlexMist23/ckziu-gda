import React from "react";
import { Check, ChevronsUpDown, Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDebounce } from "@/hooks/use-debounce"; // We'll create this

export interface SelectOption {
  value: number | string;
  label: string;
}

interface SelectSearchProps {
  placeholder?: string;
  onSelect: (value: SelectOption["value"] | null) => void;
  value?: SelectOption["value"] | null;
  apiEndpoint: string;
  buttonClassName?: string;
  popoverWidth?: string;
  initialItem?: SelectOption | null;
}

const SelectSearch = ({
  placeholder = "Select item...",
  onSelect,
  value,
  apiEndpoint,
  buttonClassName,
  popoverWidth = "w-[300px]",
  initialItem = null,
}: SelectSearchProps) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [items, setItems] = React.useState<SelectOption[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<SelectOption | null>(
    initialItem
  );
  const [error, setError] = React.useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 300);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchItems = React.useCallback(
    async (query: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${apiEndpoint}?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to load items. Please try again.");
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    },
    [apiEndpoint]
  );

  // Handle search changes
  React.useEffect(() => {
    if (open) {
      fetchItems(debouncedSearch);
    }
  }, [debouncedSearch, open, fetchItems]);

  // Load initial data when popover opens
  React.useEffect(() => {
    if (open && items.length === 0 && !search) {
      fetchItems("");
    }
  }, [open, items.length, search, fetchItems]);

  // Update selected item when value prop changes
  React.useEffect(() => {
    if (value !== undefined) {
      const newSelectedItem =
        items.find((item) => item.value === value) || null;
      setSelectedItem(newSelectedItem);
    }
  }, [value, items]);

  const handleSelect = (item: SelectOption) => {
    setSelectedItem(item);
    onSelect(item.value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between",
            !selectedItem?.label && "text-muted-foreground",
            buttonClassName
          )}
        >
          {selectedItem?.label || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", popoverWidth)}>
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>
              {isLoading ? (
                <div className="flex items-center justify-center py-6">
                  <Loader2Icon className="h-6 w-6 animate-spin" />
                </div>
              ) : error ? (
                <div className="p-4 text-sm text-red-500">{error}</div>
              ) : (
                "No items found."
              )}
            </CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={() => handleSelect(item)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedItem?.value === item.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectSearch;
