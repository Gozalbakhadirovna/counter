import { useState } from "react";

export default function InputVal() {
  const [value, setValue] = useState("Go'zal")
  return (
    <>
    <p>Value: {value} </p>
      <input
        type="text" 
        className="form-control"
        value={value}
        onChange={event => setValue(event.target.value)}
        />
    </>
  )
}
