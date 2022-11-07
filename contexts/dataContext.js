import { createContext, useEffect, useState } from "react";
import useContentful from "../hooks/useContentful";

export const DataContext = createContext();

export const DataContextProvider = ({ children, data }) => {
  const { projects, areas, skills, experiences, resume } = data;

  // const [items, setItems] = useState([]);
  // const [skills, setSkills] = useState([]);
  // const [experiences, setExperiences] = useState([]);
  // const [allProjects, setAllProjects] = useState([]);
  // const [resume, setResume] = useState("");
  // const { getAreas, getSkills, getExperiences, getProjects, getResume } = useContentful();

  // useEffect(() => {
  //   getAreas().then((response) => {
  //     setItems(response.items);
  //   });

  //   getSkills().then((response) => {
  //     setSkills(response.items);
  //   });

  //   getExperiences().then((response) => {
  //     setExperiences(response.items);
  //   });

  //   getProjects().then((response) => {
  //     setAllProjects(response.items);
  //   });

  //   getResume().then((response) => {
  //     setResume(response.includes?.Asset[0]?.fields?.file?.url);
  //   });
  // }, []);

  return <DataContext.Provider value={{ projects, areas, skills, experiences, resume }}>{children}</DataContext.Provider>;
  // return <DataContext.Provider value={{ items, skills, experiences, allProjects, resume }}>{children}</DataContext.Provider>;
};
