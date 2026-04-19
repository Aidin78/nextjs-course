
export default function BlogDetail({ params }) {
    const blogId = params.id;
    return (
        <h1>Blog {blogId}</h1>
    )
}