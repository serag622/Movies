import axiosIstance from "../Componets/Config/Config";


export function getMovies(pagenumber) {
    return (dispatch) => {
        axiosIstance.get("/movie/popular", {
            params: {
                api_key: 'fdc6e7010f3aabf52a4b413ecf1b13f4',
              page : pagenumber  
            }
        }).then(
            (res) => dispatch({
                type: 'GET_MOVIES',
                 payload:res.data.results
            }),
            (err) => console.log("err")
        );
    }
}