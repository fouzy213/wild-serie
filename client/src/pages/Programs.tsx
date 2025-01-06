import { useEffect, useState } from "react";
interface ProgramsProps {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  year: number;
  country: string;
}
const Programs = () => {
  const [programs, setPrograms] = useState<ProgramsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {programs.map((programDetail) => (
        <article key={programDetail.id}>
          <h3>{programDetail.title}</h3>
          <img src={programDetail.poster} alt={programDetail.title} />
          <p>
            {programDetail.synopsis}
            {programDetail.year}
            {programDetail.country}
          </p>
        </article>
      ))}
    </>
  );
};
export default Programs;
