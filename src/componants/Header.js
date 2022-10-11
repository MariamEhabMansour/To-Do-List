function Header({title,toggleForm,formState}){
    return(
<header className="row p-4 text-center">
     <h1 className="col-6 ">{title}</h1> 
<div className="col-3"> 
{formState? <button className="btn btn-danger" id="add" onClick={()=>toggleForm()}> close</button>
:
<button className="btn btn-primary" id="add" onClick={()=>toggleForm()}> Add</button>

}

</div>


</header>
    );
}

Header.defaultProps={
    title:'Defult Title'
}



export default Header;