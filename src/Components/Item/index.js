const item = (props) =>{
    return(
        <>
            <h1>{props.children}</h1>
            <h1>{props.texto}</h1>
        </>
    )
}

export default item;