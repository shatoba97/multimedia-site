export interface ToDayAnimalsModel {
  prescription: number,
  animal: {
    id: number,
    name: string,
    spec_name: string,
    spec_parent_name: string
  },
  my_type: string,
  drugs: [
    {
      drug_id: 1,
      drug_name: string,
      usage_instruction: string,
      form_of_drug: string,
      drug_dosage: number
    }
  ],
  description: string,
  execute_at: string,
}