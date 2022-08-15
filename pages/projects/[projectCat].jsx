import HeaderSection from "../../components/ProjectsPageComponents/HeaderSection/HeaderSection";
import ProjectsGallery from "../../components/ProjectsPageComponents/ProjectsGallery/ProjectsGallery";
import { useRouter } from "next/router";
import { mountAndGetDimensions } from "../../custom_hooks/mountAndGetDimensions";

import styles from "./ProjectsPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsPage = () => {
  const router = useRouter();

  const projectCategorySelected = router.query.projectCat;
  return (
    <div className={cx("projects-page")}>
      <HeaderSection
        projectCategorySelected={projectCategorySelected}
        mounted={mountAndGetDimensions().mounted}
        windowWidth={mountAndGetDimensions().windowWidth}
      />
      <ProjectsGallery
        projectCategorySelected={projectCategorySelected}
        mounted={mountAndGetDimensions().mounted}
        windowWidth={mountAndGetDimensions().windowWidth}
      />
    </div>
  );
};

export default ProjectsPage;
