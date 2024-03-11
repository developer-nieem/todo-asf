import Button from "./Reusable/Button"


const ListView = ({todoList , handleStatus , formatDate , data }) => {
 
  console.log("data" , data);

  return (
    
        <ol className="list-group ">
          {
       data.length > 0 ?
       data?.map((list) => (
        <li
          key={list.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="ms-2 me-auto d-flex gap-3">
            <input type="checkbox" />
            <div className="fw-bold">
              <h4>{list.title}</h4>
              <p>{formatDate(list.dateTody)}</p>
            </div>
          </div>
          <Button type="button" onClick={() => handleStatus(list.id)}  text={list.status} />
        </li>
      )) : <p>Not Found</p>
          }
        </ol>
  )
}

export default ListView
