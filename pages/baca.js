import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Baca() {
  return (
    <>

      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />

        <link href="/_manifest.json" rel="manifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app/icons/icon-192x192.png" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        <script src="/js/app.js"></script>
      </Head>

      <div className="mobile">

        <section className="bg-white">
          <article>
            <div className="cover">
              <Link href="/">
                <i className="bi bi-arrow-left back-top"></i>
              </Link>
              <i className="bi bi-heart favorit-top"></i>
              <i className="bi bi-share share-top"></i>
              <div className="bg-primary" style={{width: '100%', height: '300px', marginTop: '-24px'}}></div>
            </div>

            <div className="p-3">
              <div className="preview mb-2">
                <div className="scrolling-wrapper row flex-row flex-nowrap">
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                  <div className="col"><div className="bg-primary rounded" style={{width: '80px', height: '80px'}}></div></div>
                </div>
              </div>

              <h5 style={{ fontSize: '18px' }}>
                 Lalu Kapan Waktu Yang Tepat Untuk Service AC Mobil?
              </h5>

              <div className="rating">
                <p className="mt-2">
                  <span class="badge bg-primary p-2 mx-1">Service</span>
                  <span className="float-end">12 Maret 2021 08:15 AM</span>
                </p>
              </div>

              <div className="mb-2 mt-3">
                <p>Sebagai pengendara, Sahabat Garasi harus rajin sama yang namanya perawatan berkala. Selain ganti oli, service AC mobil atau pendingin kabin juga harus dilakukan secara berkala oleh Sahabat Garasi. Hal ini wajib dilakukan agar kondisi AC tetap baik dan terjaga sehingga mobil akan terasa nyaman saat dikendarai atau saat digunakan untuk perjalanan jauh.</p>
                <p>Melakukan perawatan atau service AC biasanya dilakukan pada waktu-waktu tertentu. Waktu service berkala pada AC itu sendiri disesuaikan dengan kondisi lingkungan atau tempat tinggal, apakah pemilik mobil  tinggal di kota-kota besar seperti Jakarta, atau tinggal di pedesaan maupun wilayah lainnya.</p>
                <h6>Lalu Kapan Waktu Yang Tepat Untuk Service AC Mobil?</h6>
                <img src="https://s.garasi.id/c1200x675/q99/article/5461ee45-1bc4-4b27-9fad-41fa33ba8296.jpeg" className="img img-fluid my-2" />
                <p>"Kami mematok standar 1 tahun atau 10 ribu km untuk service reguler AC. Itu standar pengguna mobil di kota besar seperti Jakarta," ujar pemilik bengkel AC Rotary Bintaro, Ferry Jensen yang dilansir dari Liputan6.com.</p>
                <p>Sementara itu, untuk Sahabat Garasi yang tinggal di kawasan pedesaan, Ferry mengatakan bahwa service AC bisa dilakukan per 20 ribu kilo meter. Hal ini disebabkan karena pada dasarnya udara di kawasan pedesaan lebih alami dan bersih jika dibandingkan dengan udara di wilayah perkotaan.</p>
                <p>"Tapi ada juga yang di daerah, wilayah tambang, yang service AC-nya relatif cepat, hanya 3.000 km. Mereka anggap udara di tempatnya lebih kotor," ujarnya.</p>
                <p>Pada mobil, ada dua jenis service AC yang biasa dilakukan secara berkala. Untuk yang tahunan, jenis service yang dilakukan adalah service ringan atau service kecil. Pada jenis service AC mobil semacam ini biasanya hanya melakukan pembersihan Evaporator dan filternya agar kotoran-kotoran yang masuk dapat disaring dengan maksimal.</p>
                <p>Sementara untuk service berat atau besar biasanya dilakukan pembersihan dengan cara menyeluruh. Misalnya, mencuci Evaporator serta mengisi ulang Freon. Untuk melakukan service besar ini waktu yang disarankan adalah dua tahun sekali.</p>
              </div>

              <div className="tags mb-4">
                <span class="badge bg-secondary p-2 m-1">Tips & Trik</span>
                <span class="badge bg-secondary p-2 m-1">Service Mobil</span>
                <span class="badge bg-secondary p-2 m-1">Merawat Mobil</span>
                <span class="badge bg-secondary p-2 m-1">Merawat Mobil</span>
                <span class="badge bg-secondary p-2 m-1">Merawat Mobil</span>
              </div>

              <div className="action row text-center">
                <div className="col">
                  <div class="d-grid gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-heart"></i> Suka
                    </button>
                  </div>
                </div>

                <div className="col">
                  <div class="d-grid gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-share"></i> Share
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </section>

        <div className="divider"></div>

        <section className="bg-white p-3">
          <p className="h6 mb-3">Baca Juga</p>

          <div className="scrolling-wrapper row flex-row flex-nowrap">
            <article className="col-11">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <Link href="/detail">
                    <h6 className="card-title mb-3">Card title</h6>
                  </Link>
                  <p className="mt-2">
                    <span class="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>
            <article className="col-11">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <p className="mt-2">
                    <span class="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>
            <article className="col-11">
              <div className="card">
                <div className="card card-block card-1"></div>
                <div className="card-body pb-0">
                  <h6 className="card-title mb-3">Card title</h6>
                  <p className="mt-2">
                    <span class="badge bg-primary p-2 mx-1">Service</span>
                    <span className="float-end">12 Maret 2021 08:15 AM</span>
                  </p>
                </div>
              </div>
            </article>
          </div>

        </section>

        <div className="divider"></div>


        <footer className="bg-white p-3">
          <div className="text-center">
            <h6 className="p-3">PT Carsworld Digital Indonesia</h6>
            <p>Mudah, cepat, dan informatif untuk keperluan Anda mencari bengkel atau salon mobil terdekat serta review terpercaya.</p>

            {' '}<a className="text-decoration-none" href="#">Tentang</a>{' '}
            |
            {' '}<a className="text-decoration-none" href="#">Syarat & Ketentuan</a>{' '}
            |
            {' '}<a className="text-decoration-none" href="#">Bantuan</a>{' '}

            <div className="my-2 py-2">
              <Link href="/">
                <i className="bi bi-youtube m-3"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-twitter m-3"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-instagram m-3"></i>
              </Link>
              <Link href="/">
                <i className="bi bi-facebook m-3"></i>
              </Link>
            </div>

            <hr />

            <p>Copyright © 2021 Carsworld. All Right Reserved.</p>
          </div>
        </footer>

      </div>

  </>
  )
}
