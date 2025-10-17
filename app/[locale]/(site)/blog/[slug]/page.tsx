export default function Blog({params}: { params: { slug: string }}) {
  return <div>blog details {params.slug}</div>
}
