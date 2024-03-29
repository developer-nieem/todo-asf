import Button from "./Reusable/Button"

const TableView = ({todoList , handleStatus , formatDate , data}) => {
  return (
    <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col" className="d-flex justify-content-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 ?
              data?.map((list) => (
              <tr key={list.id}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{list.title}</td>

                {/* <td> {format(date , "EEEE MM, yyyy")}</td> */}
                <td> {formatDate(list.dateTody)}</td>

                <td className="d-flex justify-content-center">

                <Button type="button"   onClick={() => handleStatus(list.id)}  text={list.status} />


                </td>
              </tr>
            )) : <p>Not Found</p>
            
            }
          </tbody>
        </table>
  )
}

export default TableView
