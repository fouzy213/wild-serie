import { useEffect,useState } from "react";
interface ProgramsProps{
    id:number;
    title:string;
    poster:string;
}
const Programs =() => {
const [programs,setPrograms]=useState<ProgramsProps[]>([])

useEffect(() => {
fetch("http://localhost:3310/api/programs")
.then((res) => res.json())
.then((data) => setPrograms(data))
.catch((err) => console.error(err))
},[]);

return (
<>
<main>
    {programs.map((program)=>(
        <img src={program.poster} alt="film" />
    ))}
</main>
</>
)
}
 export default Programs;