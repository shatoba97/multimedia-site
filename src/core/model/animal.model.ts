export interface AnimalsModel {
  id: number,
  url: string,
  name: string,
  spec: number,
  spec_name: string,
  spec_parent_name: string,
  spec_category_name: string,
  status: string,
  date_joined: string,
  birth_date: string,
  death_date: string,
  death_reason: string,
  place_of_catch: string,
  current_shelter: number,
  current_curator: string,
  animal_attributes: AnimalAttributes[],
}

interface AnimalAttributes {
  attr_id: number,
  name: string,
  value: string,
  is_required: boolean
}