import React, { useEffect, useState, useMemo } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import debounce from "lodash/debounce";

export interface SelectOption {
  value: number;
  label: string;
}

interface MultiSelectSearchProps {
  placeholder?: string;
  onSelect: (values: number[]) => void;
  apiEndpoint: string;
  buttonClassName?: string;
  popoverWidth?: string;
  initialItems?: SelectOption[];
}

const MultiSelectSearch = ({
  placeholder = "Select items...",
  onSelect,
  apiEndpoint,
  buttonClassName,
  popoverWidth,
  initialItems = [],
}: MultiSelectSearchProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<SelectOption[]>(initialItems);
  const [selectedItems, setSelectedItems] =
    useState<SelectOption[]>(initialItems);
  const [loading, setLoading] = useState(false);

  const fetchItems = async (query: string, controller: AbortController) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiEndpoint}?q=${encodeURIComponent(query)}`,
        {
          signal: controller.signal,
        }
      );
      if (!response.ok) throw new Error("Failed to fetch items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        // Ignore abort errors
        return;
      }
      console.error("Error fetching items:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Create a debounced version of the fetch function
  const debouncedFetch = useMemo(
    () =>
      debounce((query: string, controller: AbortController) => {
        fetchItems(query, controller);
      }, 150),
    [apiEndpoint] // Dependencies array
  );

  useEffect(() => {
    const controller = new AbortController();

    if (search || open) {
      debouncedFetch(search, controller);
    }

    return () => {
      debouncedFetch.cancel(); // Cancel any pending debounced calls
      controller.abort();
    };
  }, [search, open, debouncedFetch]);

  // Load initial data when popover opens
  useEffect(() => {
    if (open && !search && items.length === 0) {
      const controller = new AbortController();
      fetchItems("", controller);
      return () => controller.abort();
    }
  }, [open]);

  const toggleItem = (item: SelectOption) => {
    const newSelectedItems = selectedItems.some((i) => i.value === item.value)
      ? selectedItems.filter((i) => i.value !== item.value)
      : [...selectedItems, item];

    setSelectedItems(newSelectedItems);
    onSelect(newSelectedItems.map((i) => i.value));
  };

  const removeItem = (itemToRemove: SelectOption, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSelectedItems = selectedItems.filter(
      (item) => item.value !== itemToRemove.value
    );
    setSelectedItems(newSelectedItems);
    onSelect(newSelectedItems.map((i) => i.value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("h-fit min-h-10 justify-between", buttonClassName)}
        >
          <div className="h-fit flex flex-wrap gap-1 max-w-[90%]">
            {selectedItems.length === 0 && placeholder}
            {selectedItems.map((item) => (
              <Badge key={item.value} variant="secondary" className="mr-1 mb-1">
                {item.label}
                <span
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => removeItem(item, e)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </span>
              </Badge>
            ))}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
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
              {loading ? "Loading..." : "No items found."}
            </CommandEmpty>
            <CommandGroup className="relative h-fit max-h-64 overflow-auto">
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => toggleItem(item)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedItems.some((i) => i.value === item.value)
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

export default MultiSelectSearch;
