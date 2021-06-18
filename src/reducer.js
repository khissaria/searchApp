const reducer =(state,action) => {
    if(action.type==='SEARCH_REQUEST')
    {
        return {
            ...state,
            loading:false,
            errorMessage:null
        }
    }
    if(action.type==='SEARCH_REQUEST_SUCCESS')
    {
        return {
            ...state,
            loading: false,
            movies: action.payload
          };
    }
    if(action.type==='SEARCH_REQUEST_FAILURE')
    {
        return {
            ...state,
            loading: false,
            errorMessage: action.error
          };
    };
    
}