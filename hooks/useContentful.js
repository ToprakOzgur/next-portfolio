import { createClient } from "contentful";
import { useEffect } from "react";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_KEY,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    host: process.env.NEXT_PUBLIC_HOST,
    //     # HOST: "cdn.contentful.com"
  });

  const getProjects = async () => {
    try {
      const projects = await client.getEntries({
        content_type: "project",
        select: "fields",
        order: "fields.order",
      });

      return projects;
    } catch (error) {
      console.log(error);
    }
  };
  const getAreas = async () => {
    try {
      const areas = await client.getEntries({
        content_type: "area",
        select: "fields",
        order: "fields.order",
      });

      return areas;
    } catch (error) {
      console.log(error);
    }
  };

  const getSkills = async () => {
    try {
      const skills = await client.getEntries({
        content_type: "skill",
        select: "fields",
        order: "fields.name",
      });

      return skills;
    } catch (error) {
      console.log(error);
    }
  };
  const getExperiences = async () => {
    try {
      const skills = await client.getEntries({
        content_type: "exp",
        select: "fields",
        order: "fields.order",
      });

      return skills;
    } catch (error) {
      console.log(error);
    }
  };
  const getResume = async () => {
    try {
      const resume = await client.getEntries({
        content_type: "resume",
        select: "fields",
      });

      return resume;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAreas, getSkills, getExperiences, getProjects, getResume };
};

export default useContentful;
