import "./HomePage.scss";
import Bookcover from "../../components/utillity/Bookcover/Bookcover";
import Img from "../../components/utillity/Image/Img";

const bookLinks = [
  {
    icon: "books/scythe_cover_1.jpg",
    link: "https://www.google.com/books/edition/Scythe/4Nd_DQAAQBAJ?hl=en&gbpv=1",
  },
  {
    icon: "books/scythe_cover_2.jpg",
    link: "https://www.google.com/books/edition/Thunderhead/lHzZDwAAQBAJ?hl=en&gbpv=1",
  },
  {
    icon: "books/scythe_cover_3.jpg",
    link: "https://www.google.com/books/edition/The_Toll/D920DwAAQBAJ?hl=en&gbpv=1",
  },
];

const HomePage: React.FunctionComponent = () => {
  return (
    <article id="homePage">
      <fieldset>
        <legend>Book 1 in Arc of a Scythe</legend>
        <div className="top">
          <Bookcover
            title={"Navigate to Google books"}
            link={bookLinks[0].link}
            icon={bookLinks[0].icon}
          />
          <div className="topRight">
            <h2>Scythe</h2>
            <div className="links">
              <a
                title="Navigate to Goodreads.com"
                target="_blank"
                href="https://www.goodreads.com/book/show/28954189-scythe"
              >
                <Img src={"icons/goodreads.png"}></Img>
                <label>Goodreads</label>
              </a>
              <a
                title="Navigate to SimonAndSchuster.com"
                target="_blank"
                href="http://www.simonandschuster.com/books/Scythe/Neal-Shusterman/9781442472426"
              >
                <Img src={"icons/open-book.png"}></Img>
                <label>Read An Excerpt</label>
              </a>
              <a
                title="Navigate to Amazon.com"
                target="_blank"
                href="http://www.amazon.com/Scythe-Neal-Shusterman/dp/1442472421"
              >
                <Img src={"icons/cart.svg"}></Img>
                <label>Buy on Amazon</label>
              </a>
              <a
                title="Navigate to BarnesAndNoble.com"
                target="_blank"
                href="https://www.barnesandnoble.com/w/scythe-neal-shusterman/1113794690?ean=9781442472433#/"
              >
                <Img src={"icons/cart.svg"}></Img>
                <label>Buy on Barnes & Nobel</label>
              </a>
            </div>
          </div>
        </div>

        <details>
          <summary>Book description</summary>

          <p>
            Two teens must learn the “art of killing” in this Printz
            Honor-winning book, the first in a chilling new series from{" "}
            <strong>Neal Shusterman</strong>, author of the New York Times
            bestselling Unwind dystology.
          </p>
          <p>
            A world with no hunger, no disease, no war, no misery: humanity has
            conquered all those things, and has even conquered death. Now
            Scythes are the only ones who can end life—and they are commanded to
            do so, in order to keep the size of the population under control.
          </p>
          <p>
            Citra and Rowan are chosen to apprentice to a scythe—a role that
            neither wants. These teens must master the “art” of taking life,
            knowing that the consequence of failure could mean losing their own.
          </p>
          <p>
            Scythe is the first novel of a thrilling new series by National Book
            Award-winning author Neal Shusterman in which Citra and Rowan learn
            that a perfect world comes only with a heavy price.
          </p>
        </details>
      </fieldset>

      <fieldset>
        <legend>Book 2 in Arc of a Scythe</legend>
        <div className="top">
          <Bookcover
            title={"Navigate to Google books"}
            link={bookLinks[1].link}
            icon={bookLinks[1].icon}
          />
          <div className="topRight">
            <h2>Thunder Head</h2>
            <div className="links">
              <a
                title="Navigate to Goodreads.com"
                target="_blank"
                href="https://www.goodreads.com/en/book/show/33555224"
              >
                <Img src={"icons/goodreads.png"}></Img>
                <label>Goodreads</label>
              </a>
              <a
                title="Navigate to SimonAndSchuster.com"
                target="_blank"
                href="https://www.simonandschuster.com/books/Thunderhead/Neal-Shusterman/Arc-of-a-Scythe/9781442472464"
              >
                <Img src={"icons/open-book.png"}></Img>
                <label>Read An Excerpt</label>
              </a>
              <a
                title="Navigate to Amazon.com"
                target="_blank"
                href="https://www.amazon.com/Thunderhead-Arc-Scythe-Neal-Shusterman/dp/1442472456/ref=pd_bxgy_vft_none_sccl_1/132-9531220-5338734?pd_rd_w=5Zm1P&content-id=amzn1.sym.26a5c67f-1a30-486b-bb90-b523ad38d5a0&pf_rd_p=26a5c67f-1a30-486b-bb90-b523ad38d5a0&pf_rd_r=7EYTGX4HZJE4YFQ3M3KJ&pd_rd_wg=fL8RQ&pd_rd_r=c297a9e5-aec0-4c76-8cfa-ab4acc2b56c4&pd_rd_i=1442472456&psc=1"
              >
                <Img src={"icons/cart.svg"}></Img>
                <label>Buy on Amazon</label>
              </a>
              <a
                title="Navigate to BarnesAndNoble.com"
                target="_blank"
                href="https://www.barnesandnoble.com/w/thunderhead-neal-shusterman/1125685916?ean=9781442472464"
              >
                <Img src={"icons/cart.svg"}></Img>
                <label>Buy on Barnes & Nobel</label>
              </a>
            </div>
          </div>
        </div>

        <details>
          <summary>Book Description</summary>
          <p>
            Rowan and Citra take opposite stances on the morality of the
            Scythedom, putting them at odds, in the chilling sequel to the
            Printz Honor Book Scythe from New York Times bestseller Neal
            Shusterman, author of the Unwind dystology.
          </p>
          <p>
            The Thunderhead cannot interfere in the affairs of the Scythedom.
            All it can do is observe—it does not like what it sees.
          </p>
          <p>
            A year has passed since Rowan had gone off grid. Since then, he has
            become an urban legend, a vigilante snuffing out corrupt scythes in
            a trial by fire. His story is told in whispers across the continent.
          </p>
          <p>
            As Scythe Anastasia, Citra gleans with compassion and openly
            challenges the ideals of the “new order.” But when her life is
            threatened and her methods questioned, it becomes clear that not
            everyone is open to the change.
          </p>
          <p>
            Will the Thunderhead intervene?
            <br />
            Or will it simply watch as this perfect world begins to unravel?
          </p>
        </details>
      </fieldset>

      <fieldset>
        <legend>Book 3 in Arc of a Scythe</legend>
        <div className="top">
          <Bookcover
            title={"Navigate to Google books"}
            link={bookLinks[2].link}
            icon={bookLinks[2].icon}
          />
          <div className="topRight">
            <h2>The Toll</h2>
            <div className="links">
              <a
                title="Navigate to Goodreads.com"
                target="_blank"
                href="https://www.goodreads.com/book/show/43822024-the-toll?from_search=true&from_srp=true&qid=CqV09fMAAz&rank=2"
              >
                <Img src={"icons/goodreads.png"}></Img>
                <label>Goodreads</label>
              </a>
              <a
                title="Navigate to SimonAndSchuster.com"
                target="_blank"
                href="https://www.simonandschuster.com/books/The-Toll/Neal-Shusterman/Arc-of-a-Scythe/9781481497077"
              >
                <Img src={"icons/open-book.png"}></Img>
                <label>Read An Excerpt</label>
              </a>
              <a
                title="Navigate to Amazon.com"
                target="_blank"
                href="https://www.amazon.com/Toll-3-Arc-Scythe/dp/1481497065/?redirectFromSmile=1"
              >
                <Img src={"icons/cart.svg"}></Img>
                <label>Buy on Amazon</label>
              </a>
              <a
                title="Navigate to BarnesAndNoble.com"
                target="_blank"
                href="https://www.barnesandnoble.com/w/the-toll-neal-shusterman/1130507661/"
              >
                <Img src={"icons/cart.svg"}></Img>
                <label>Buy on Barnes & Nobel</label>
              </a>
            </div>
          </div>
        </div>

        <details>
          <summary>Book description</summary>
          <p>
            In the highly anticipated finale to the New York Times bestselling
            trilogy, dictators, prophets, and tensions rise. In a world that’s
            conquered death, will humanity finally be torn asunder by the
            immortal beings it created?
          </p>
          <p>
            Citra and Rowan have disappeared. Endura is gone. It seems like
            nothing stands between Scythe Goddard and absolute dominion over the
            world scythedom. With the silence of the Thunderhead and the
            reverberations of the Great Resonance still shaking the earth to its
            core, the question remains: Is there anyone left who can stop him?
          </p>
          <p>The answer lies in the Tone, the Toll, and the Thunder.</p>
        </details>
      </fieldset>
    </article>
  );
};

export default HomePage;
