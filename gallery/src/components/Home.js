import React from 'react'
import Gallery from './Gallery.js'
import ScrollText from 'react-scroll-text'
import '../style/Home.css';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // list: ["claimTheEcho.jpg", "outpost.jpg", "plymouthFury.jpg"],
      list: [{name: "https://images.squarespace-cdn.com/content/v1/5065261fe4b0b0c3fa5adc93/1412623598139-BC6T79X3DJ5IBRG3UMK3/ke17ZwdGBToddI8pDm48kEfj2iehcImfUrNPp_p3mIQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dvVMhtqkTAeLq_Ad5NjnhUgZRGpRgWfG6TFTdciSykqMbSexTd1-frD7527z4SM9QQ/image-asset.jpeg?format=2500w"},
            {name: "https://images.squarespace-cdn.com/content/v1/5065261fe4b0b0c3fa5adc93/1606268249679-TXGZ0IL3WVUR2UUIKWO5/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/image-asset.jpeg?format=1500w"},
            {name: "https://images.squarespace-cdn.com/content/v1/5065261fe4b0b0c3fa5adc93/1606268226004-Z7B2FOF8KQHRRK3B5LL5/ke17ZwdGBToddI8pDm48kPT1Nkx3ySqTQzCFwVjaPQEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2doWNX6v4NUZXVvq55gptTczsEhgvyXzBMRDIk3x86TC9JvwGh1qtNWvMhYKnvaKhbA/image-asset.jpeg?format=2500w"},
      ],
    }
    // this.filterByTeams = this.filterByTeams.bind(this);
  }

  componentDidMount() {
  }


  render() {    
    return (
        <div className="Home">
          <Gallery></Gallery>
          {/* { this.state.list.map((art) => (
            // <img src={"../HomeGallery/"+artLink}></img>
            <img src={art.name}></img>
          ))} */}
        </div>
    );
  }
}