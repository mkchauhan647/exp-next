export default function  HomePage() {

 
  const getValue = async () => {
    const value = await fetch('http://localhost:3000/test',{
      method:'GET'
    })
    console.log(await value.json())
  }

    getValue();

  return (
    <h1>This is homepage</h1>

  )

}