import { Autocomplete, Stack, TextField } from "@mui/material";
import axios from "axios";
import { Component } from "react";

const api = "https://634f54cb4af5fdff3a723cca.mockapi.io/v1/users";

class SelectRight extends Component {
  constructor(props) {
    super(props);
    this.state = { name: [] };
  }
 async componentDidMount() {
  try {
    const response = await axios.get(api);
    this.setState({ ...this.state, name: response.data });
  } catch (error) {
    console.log(error);
  } 
  }
  render() {
    return (
      <Stack spacing={3} sx={{ m: 1, width: 710 }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={this.state.name}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label={this.props.title} placeholder="TÌM KIẾM" />
          )}
        />
      </Stack>
    );
  }
}

export default SelectRight;
