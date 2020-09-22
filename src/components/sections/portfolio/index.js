import React, {useState, useEffect} from 'react';
import {FirebaseDB} from '../../../firebaseConfig';

import './style.scss';

const initData = {
  title: 'Portfolio',
  menu_items: [
    {
      slug: 'java',
      text: 'Java',
      active: false,
    },
  ],
  projects: [
    // {
    //   slug: 'project-1',
    //   title: 'Project 1',
    //   image: 'image_url',
    //   tags: ['logo', 'web', 'ui', 'ux'],
    // },
  ],
  action_button: {
    text: 'Load More',
    url: 'url',
  },
};

export default function Portfolio() {
  const [title, setTitle] = useState(initData.title);
  const [menuItems, setMenuItems] = useState(initData.menu_items);
  const [projects, setProjects] = useState(initData.projects);
  const [filteredProjects, setFilteredProjects] = useState(initData.projects);
  const [actionButton, setActionButton] = useState(initData.action_button);

  useEffect(() => {
    const portfolioRef = FirebaseDB.ref('/sections/portfolio/');
    portfolioRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        const {title, menu_items, projects: fb_projects, action_button} = data;
        const menu_keys = Object.keys(menu_items);
        const __menu_items = menu_keys.map((key) => menu_items[key]);
        const projects_keys = Object.keys(fb_projects);
        const __projects = projects_keys.map((key) => {
          const project = fb_projects[key];
          const tag_keys = Object.keys(project.tags);
          const tags = tag_keys.map((tag_key) => project.tags[tag_key].name);
          project.tags = tags;
          return project;
        });

        console.log('projects', projects, __projects);
        setTitle(title);
        setMenuItems(__menu_items);
        setProjects(__projects);
        // const __filtered_projects = filterProjects();
        setFilteredProjects(__projects);
        setActionButton(action_button);
      }
    });
  }, []);

  const filterProjects = () => {
    let filteredProjectsList = projects;
    let activeMenuItemList = menuItems.filter((item) => item.active);
    if (!activeMenuItemList.length) {
      activeMenuItemList = menuItems;
    }
    const activeMenuItem = activeMenuItemList[0];
    if (activeMenuItem.slug == 'all') {
      setFilteredProjects(filteredProjectsList);
      return filteredProjectsList;
    }
    filteredProjectsList = projects.filter((project) => {
      const tags = project.tags;
      console.log('tags', tags);
      const matched_tags = tags.filter((tag) => tag == activeMenuItem.slug);
      console.log('matched_tags', matched_tags);
      return matched_tags.length > 0;
    });
    setFilteredProjects(filteredProjectsList);
    return filteredProjectsList;
  };

  const renderMenu = () => {
    const data = menuItems.map((item) => {
      return (
        <li key={item.slug}>
          <a class={item.active ? 'active' : ''}>{item.text}</a>
        </li>
      );
    });
    return (
      <div class='col-md-12 cms-col'>
        <ul class='menu'>{data} </ul>
      </div>
    );
  };

  const renderProjects = () => {
    const data = filteredProjects.map((project) => {
      return (
        <div key={project.slug} class='col-md-4 col-xs-6 cms-col'>
          <div class='portfolio-item'>
            <img src={project.image} alt={project.title} />
            <a href={`/projects/${project.slug}`} class='item-overlay'>
              {project.title}
            </a>
          </div>
        </div>
      );
    });
    return <div class='row'>{data}</div>;
  };
  return (
    <section id='portfolio'>
      <div class='container cms-container'>
        <div class='row'>
          <h1 class='section-title'>{title}</h1>
        </div>
        <div class='row'>{renderMenu()}</div>
        {renderProjects()}
        <div class='row'>
          <div class='col-md-12 cms-col'>
            <a href={actionButton.url} class='btn btn-primary more'>
              {actionButton.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
