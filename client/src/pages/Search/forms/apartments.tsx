import React from "react";
import { Container } from "@mui/material";

import MultiCheckbox from "components/MultiCheckbox";
import NumberRange from "components/NumberRange";
import LocationSelect from "components/LocationSelect";

import {
  SearchParams,
  apartmentTypes,
  apartmentExtras,
  buildingTypes,
} from "types/estate";

interface SearchFormProps {
  searchParams: SearchParams;
  updateSearchParams: (data: Partial<SearchParams>) => void;
}

export default function ApartmentsForm(props: SearchFormProps) {
  return (
    <Container
      data-test="apartments-form"
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <MultiCheckbox
        dataTest="type-checkbox"
        title="Type"
        options={apartmentTypes}
        selected={props.searchParams.type}
        update={(value: string[]) => props.updateSearchParams({ type: value })}
      />
      <MultiCheckbox
        title="Extras"
        options={apartmentExtras}
        selected={props.searchParams.extras}
        update={(value: string[]) =>
          props.updateSearchParams({ extras: value })
        }
      />
      <MultiCheckbox
        title="Building type"
        options={buildingTypes}
        selected={props.searchParams.building_type}
        update={(value: string[]) =>
          props.updateSearchParams({ building_type: value })
        }
      />
      <NumberRange
        title="Price"
        minValue={props.searchParams.min_price}
        maxValue={props.searchParams.max_price}
        minUpdate={(value: number) =>
          props.updateSearchParams({ min_price: value })
        }
        maxUpdate={(value: number) =>
          props.updateSearchParams({ max_price: value })
        }
      />
      <NumberRange
        title="Area"
        minValue={props.searchParams.min_area}
        maxValue={props.searchParams.max_area}
        minUpdate={(value: number) =>
          props.updateSearchParams({ min_area: value })
        }
        maxUpdate={(value: number) =>
          props.updateSearchParams({ max_area: value })
        }
      />
      <NumberRange
        title="Floor"
        minValue={props.searchParams.min_floor}
        maxValue={props.searchParams.max_floor}
        minUpdate={(value: number) =>
          props.updateSearchParams({ min_floor: value })
        }
        maxUpdate={(value: number) =>
          props.updateSearchParams({ max_floor: value })
        }
      />
      <LocationSelect
        label
        checkbox
        region={props.searchParams.region}
        district={props.searchParams.districts}
        updateRegion={(region) =>
          props.updateSearchParams({ region: region, districts: [] })
        }
        updateDistrict={(districts) =>
          props.updateSearchParams({ districts: districts })
        }
      />
    </Container>
  );
}
