import { IProjectStore } from '@store/type';

export const initalProjects: IProjectStore = {
  activeView: 'kanban',
  activeProjectID: '',
  projects: [
    {
      id: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      name: 'E-commerce Website Development',
      description: 'Build a modern e-commerce website for a clothing brand.',
      stages: [
        {
          id: '80bca974-624b-4325-afdc-c3d7f992c3a4',
          name: 'Planning',
          color: '#FF5733',
          expanded: true,
        },
        {
          id: 'd4ed5765-9a16-4b32-abbe-853d278752b6',
          name: 'Design',
          color: '#33FF57',
          expanded: false,
        },
        {
          id: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
          name: 'Development',
          color: '#3357FF',
          expanded: false,
        },
      ],
      tags: [
        {
          id: '7aad4bcf-e6b5-48cb-a1a2-6433aa96d085',
          name: 'Front-End',
          color: '#FF5733',
        },
        {
          id: '690e259d-4976-4680-8650-ac703003fd64',
          name: 'Back-End',
          color: '#33FF57',
        },
        {
          id: 'e4a25fa0-6b9c-44e9-b2b4-b603a9cce20e',
          name: 'UI/UX',
          color: '#3357FF',
        },
        {
          id: 'f4c3a280-0aa6-45fe-becf-ef5059d8dad7',
          name: 'Marketing',
          color: '#FF33A1',
        },
        {
          id: 'f4c3a280-0aa6-45fe-becf-ef5059d4gwb9',
          name: 'QA',
          color: '#3686FF',
        },
      ],
      status: 'active',
    },
  ],
  tasks: [
    {
      id: '1a6c7e6f-4fd8-4c76-8c45-fa58a19ee256',
      title: 'Gather Requirements',
      description:
        'Conduct interviews with stakeholders to gather requirements for the website.',
      attachments: [],
      stageID: '80bca974-624b-4325-afdc-c3d7f992c3a4',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['7aad4bcf-e6b5-48cb-a1a2-6433aa96d085'],
      dueDate: {
        start: '2024-06-01',
        end: '2024-06-05',
      },
    },
    {
      id: '9a9b6284-0a48-4c22-a172-89a68a977e3d',
      title: 'Create Wireframes',
      description:
        "Design wireframes for the website's layout and user interface.",
      attachments: [],
      stageID: 'd4ed5765-9a16-4b32-abbe-853d278752b6',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['e4a25fa0-6b9c-44e9-b2b4-b603a9cce20e'],
      dueDate: {
        start: '2024-06-06',
        end: '2024-06-10',
      },
    },
    {
      id: '4c784a9b-64d7-4d43-ae2e-0841587808e1',
      title: 'Front-End Development',
      description:
        'Develop the front-end components and user interface of the website.',
      attachments: [],
      stageID: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['7aad4bcf-e6b5-48cb-a1a2-6433aa96d085'],
      dueDate: {
        start: '2024-06-11',
        end: '2024-06-15',
      },
    },
    {
      id: '3766f14d-9f57-4183-9bbd-ba5c02f3b8e3',
      title: 'Back-End Development',
      description:
        'Develop the back-end functionality and database structure of the website.',
      attachments: [],
      stageID: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['690e259d-4976-4680-8650-ac703003fd64'],
      dueDate: {
        start: '2024-06-16',
        end: '2024-06-20',
      },
    },
    {
      id: 'c3c54143-9127-4262-8de1-2d1654b7ab67',
      title: 'Product Page Development',
      description: 'Design and develop product pages for the website.',
      attachments: [],
      stageID: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['7aad4bcf-e6b5-48cb-a1a2-6433aa96d085'],
      dueDate: {
        start: '2024-06-21',
        end: '2024-06-25',
      },
    },
    {
      id: '8743b69f-e8d4-4fb1-bf30-c1c79bc74039',
      title: 'Database Integration',
      description:
        'Integrate the website with the database to manage product data.',
      attachments: [],
      stageID: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['690e259d-4976-4680-8650-ac703003fd64'],
      dueDate: {
        start: '2024-06-26',
        end: '2024-06-30',
      },
    },
    {
      id: 'e2dc1e9c-d6ee-4e3e-9b80-6cb70d44e81c',
      title: 'User Testing',
      description:
        "Conduct user testing to gather feedback and improve the website's usability.",
      attachments: [],
      stageID: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['7aad4bcf-e6b5-48cb-a1a2-6433aa96d085'],
      dueDate: {
        start: '2024-07-01',
        end: '2024-07-05',
      },
    },
    {
      id: '1a2f7fb3-6eb4-4655-8823-d23ae9eb1542',
      title: 'Performance Optimization',
      description:
        "Optimize the website's performance for faster loading times.",
      attachments: [],
      stageID: '0fcaed74-8adf-4bb0-98c8-22fca7ca5da8',
      projectID: '5eb8e255-ac5c-436c-8bab-7a35e8b55644',
      tags: ['7aad4bcf-e6b5-48cb-a1a2-6433aa96d085'],
      dueDate: {
        start: '2024-07-06',
        end: '2024-07-10',
      },
    },
  ],
};
