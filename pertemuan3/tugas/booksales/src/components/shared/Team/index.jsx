export default function Team() {
  return (
    <main className="container">   
        {/* HERO */}
        <div className="text-center py-5">
            <h1 className="display-5 fw-bold">Meet Our Team</h1>
            <p className="lead text-muted">
            Tim Hebat di balik HonMegane — Website Penjualan Buku yang membantu kamu menemukan bacaan terbaik.
            </p>
        </div>

        {/* TEAM LIST */}
        <div className="row">
            {[
            {
                name: "Muhamad Hilmi Kamil",
                role: "Frontend Developer",
                img: "https://i.pinimg.com/736x/62/2a/bd/622abdb66db47aa105401d8576bd98b2.jpg",
                desc: "Membangun tampilan website yang responsif dan user-friendly."
            },
            {
                name: "Aulia Rahman",
                role: "Backend Developer",
                img: "https://i.pinimg.com/1200x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
                desc: "Mengelola server, database, dan sistem backend."
            },
            {
                name: "Siti Nurhaliza",
                role: "UI/UX Designer",
                img: "https://i.pinimg.com/736x/de/1b/c7/de1bc77104ebbf02bf84543733eff854.jpg",
                desc: "Mendesain tampilan yang menarik dan nyaman digunakan."
            },
            {
                name: "Rizky Pratama",
                role: "Digital Marketing",
                img: "https://i.pinimg.com/736x/f4/07/5d/f4075d3fdfdf01e3162a845403fdce5f.jpg",
                desc: "Mengatur strategi pemasaran dan promosi buku."
            },
            {
                name: "Dewi Lestari",
                role: "Content Writer",
                img: "https://i.pinimg.com/736x/5f/af/a1/5fafa1c629408653787030824b6eb538.jpg",
                desc: "Menulis deskripsi buku dan konten website."
            },
            {
                name: "Fajar Nugroho",
                role: "Data Analyst",
                img: "https://i.pinimg.com/736x/3a/0a/e9/3a0ae9fdcf6fdd0321a0a224454211f3.jpg",
                desc: "Menganalisis data penjualan dan perilaku pengguna."
            }
            ].map((team, index) => (
            <div className="col-md-6 mb-4" key={index}>
                <div className="row g-0 border rounded overflow-hidden shadow-sm h-100">
                
                {/* TEXT */}
                <div className="col p-4 d-flex flex-column">
                    <strong className="text-primary mb-2">
                    {team.role}
                    </strong>

                    <h3 className="mb-2">{team.name}</h3>

                    <p className="card-text text-muted mb-auto">
                    {team.desc}
                    </p>

                    <button className="btn btn-sm btn-outline-primary mt-3">
                    View Profile
                    </button>
                </div>

                {/* IMAGE */}
                <div className="col-auto d-none d-lg-block">
                    <img
                    src={team.img}
                    alt={team.name}
                    style={{
                        width: "200px",
                        height: "250px",
                        objectFit: "cover"
                    }}
                    />
                </div>

                </div>
            </div>
            ))}
        </div>

        </main>
    );
    }