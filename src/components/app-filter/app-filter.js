import './app-filter.css';

 const AppFilter = () => {
     return (
         <div className="btn-group">
             <button className="btn btn-light"
             typr="button">
                 Все сотрудники
             </button>

             <button className="btn btn-outline-light"
             typr="button">
                 На повышение
             </button>

             <button className="btn btn-outline-light"
             typr="button">
                 З/П больше $1000
             </button>
         </div>
     );
 }

 export default AppFilter;