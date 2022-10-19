import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";

const api = "https://634f54cb4af5fdff3a723cca.mockapi.io/v1/users";

export default function SelectRight(title) {
  const [name, setName] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(api);
      setName(response.data);
    }
    fetchData();
  }, []);

  return (
    <Stack spacing={3} sx={{ m: 1, width: 710 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={name}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label={title.title} placeholder="TÌM KIẾM" />
        )}
      />
    </Stack>
  );
}
