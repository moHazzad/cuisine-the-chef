import React from 'react'

function Ingridients({ingi}) {
    
  return (
    
    <div className="overflow-x-auto">
  <table className="table w-full">
    
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>{ingi}</td>
        
      </tr>
     
    </tbody>
  </table>
</div>
  )
}

export default Ingridients