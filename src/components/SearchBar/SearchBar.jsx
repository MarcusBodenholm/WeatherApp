import {styled, alpha} from "@mui/material/styles"
import { Button, InputBase, Stack } from "@mui/material";
import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search"


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.down('sm')]: {
      '&:focus': {
        borderRadius: '5px',
        
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
        borderRadius: '5px',
        
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '55ch',
      '&:focus': {
        width: '60ch',
        borderRadius: '5px'      
      },
      
    }
  }
}));
  

const SearchBar = props => {
  const searchValue = useRef();   
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      props.onClick(searchValue.current.value)
    }
  }
  const handleClick = () => {
      if (searchValue.current.value === "") return;
      props.onClick(searchValue.current.value)
  }
  return (
      <Stack direction="row" spacing={2} sx={{width: "80%"}}>
          <Search>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  id="location-search"
                  autoComplete="city"
                  onKeyDown={handleEnter}
                  inputRef={searchValue}
                  placeholder="Search for a city"
                  inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <Button variant="contained" onClick={() => handleClick()}>Search</Button>
      </Stack>
  )
}

export default SearchBar;