import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectFilter(props) {
    const { label, selectedValues, setSelectedValues, values } = props;

    return (
        <>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel>{label}</InputLabel>
                <Select
                    multiple
                    label={label}
                    value={selectedValues}
                    onChange={event => setSelectedValues(event.target.value)}
                >
                    {values
                        .map(value => (
                            <MenuItem key={value} value={value}>
                                {value}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </>
    );
}
