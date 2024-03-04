import Button from "./Reusable/Button"

const FilterGroupBtn = ({tex1 , tex2 , tex3}) => {
    const func =() =>{

    }


  return (
    <div className="btn-group" role="group" aria-label="Basic example">
       <Button type="button" text={tex1} onClick={()=> func() } />
       <Button type="button" text={tex2} onClick={()=> func() } />
       <Button type="button" text={tex3} onClick={()=> func() } />
    </div>
  )
}

export default FilterGroupBtn
