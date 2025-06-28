import blogPosts from '@/data/blogs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container  py-5">
      <div className="text-center  mb-5">
        <button className="text-uppercase disabled highlight text-white  btn py-1 px-2 ">Blog</button>
        <h1 className="display-5 fw-bold text-white">Unlock AI Insights with Us</h1>
        <p className="text-secondary w-50 mx-auto">
          Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth.
        </p>
      </div>

      <div className="row g-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-6">
            <div className="card bg-sec text-white h-100 shadow p-4">
              <Image
                src={post.image}
                alt={post.title}
                className="card-img-top rounded"
                width={500}
                height={250}
                style={{ aspectRatio: '1 / 1', objectFit: 'cover', width: '500px', height: '250px' }}
              />
              <div className="card-body">
                <span className="badge bg-secondary mb-2">AI/IT</span>
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text  small">{post.content.slice(0, 80)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
