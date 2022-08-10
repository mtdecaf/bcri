import HeaderSection from "../../components/ProjectsPageComponents/HeaderSection/HeaderSection";
import ProjectsGallery from "../../components/ProjectsPageComponents/ProjectsGallery/ProjectsGallery";
import { useRouter } from "next/router";
import { mountAndGetWidth } from "../../custom_hooks/mountAndGetWidth";

import styles from "./ProjectsPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsPage = () => {
  const router = useRouter();

  const projectCategorySelected = router.query.projectCat;
  console.log(projectCategorySelected);
  return (
    <div className={cx("projects-page")}>
      <HeaderSection
        projectCategorySelected={projectCategorySelected}
        mounted={mountAndGetWidth().mounted}
        windowWidth={mountAndGetWidth().windowWidth}
      />
      <ProjectsGallery
        projectCategorySelected={projectCategorySelected}
        mounted={mountAndGetWidth().mounted}
      />
    </div>
  );
};

export default ProjectsPage;
