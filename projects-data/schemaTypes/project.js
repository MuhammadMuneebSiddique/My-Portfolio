export const projectSchema = [
    {
        title: "Projects",
        name: "Project",
        type: "document",
        fields: [
            {
                title: "Project Id",
                name: "project_id",
                type: "number"
            },
            {
                title: "Project Name",
                name: "project_name",
                type: "string"
            },
            {
                title: "Project Category",
                name: "project_category",
                type: "string"
            },
            {
                title: "Project Description",
                name: "project_description",
                type: "string"
            },
            {
                title: "Project Link",
                name: "project_link",
                type: "string"
            },
            {
                title: "Project Repositry Link",
                name: "project_repositry_link",
                type: "string",
            },
            {
                title: "Technologies",
                name: "technologies",
                type: "array",
                of:[{type:"string"}]
            },
            {
                title: "Project Image",
                name: "project_image",
                type: "image",
            }
        ]
    }  
]