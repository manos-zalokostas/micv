export const MonitorProject = () => {
    let [title, category, description, image] = getData();
    return (`
           <li id="project" style="left: 0px;" class="slide_animated">
            <div class="mitem">
                <h2>Projects</h2>
                <h3>${title}</h3>
                <h4>${category}</h4>
                <p>..${description}..</p>
                <img src=${image} style="right: 0px;">
            </div>
            <div style="background: url(${image}) 50% center / 100% no-repeat; bottom: 0px;">&nbsp;</div>
        </li>
`);
}


const getData = () => [
    'Cisco and Education',
    'Management',
    `development of a collaborative tagging resource system that is planned to be employed on a college’s online platform and that will assist student to append ‘tags’ on resource materials, thus organize and categorize them. The resources will be shared among the students and the academic staff of a College (User authentication and authorization is performed by the build platform and is beyond the scope of this system). <p></p>
  <p>The database of the system should keep track of Users, Resources and Tags. A ternary relationship between these 3 entities has been modeled using a bridge relation ‘UserResourceTag’. </p>
  <p>The database for this activity should be completely designed and hardcoded using the ‘oracle developer’ IDE and provide screenshotss of the process. </p>`,
    'images/dba_a2/select_group_orderby.jpg',
];
