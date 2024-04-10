
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



const CustomPagination = ({ setPage, nrPage }) => {

    const handlepageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{
                width: '100%',
                color: 'white',
                display: 'flex',
                justifyContent: 'center', marginTop: 10,
                paddingBottom: '40px'
            }}>


                <Stack spacing={2}>

                    <Pagination count={nrPage}
                        onChange={(e) => handlepageChange(e.target.textContent)}
                        hideNextButton
                        hidePrevButton
                        variant="outlined"
                        color="primary" />

                </Stack>
            </div>
        </ThemeProvider>
    );

}

export default CustomPagination;