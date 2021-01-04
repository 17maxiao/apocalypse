import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../style/Gallery.css";

let list = [
    {name: "https://images.squarespace-cdn.com/content/v1/5065261fe4b0b0c3fa5adc93/1412623598139-BC6T79X3DJ5IBRG3UMK3/ke17ZwdGBToddI8pDm48kEfj2iehcImfUrNPp_p3mIQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dvVMhtqkTAeLq_Ad5NjnhUgZRGpRgWfG6TFTdciSykqMbSexTd1-frD7527z4SM9QQ/image-asset.jpeg?format=2500w"},
    {name: "https://images.squarespace-cdn.com/content/v1/5065261fe4b0b0c3fa5adc93/1606268249679-TXGZ0IL3WVUR2UUIKWO5/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/image-asset.jpeg?format=1500w"},
    {name: "https://images.squarespace-cdn.com/content/v1/5065261fe4b0b0c3fa5adc93/1606268226004-Z7B2FOF8KQHRRK3B5LL5/ke17ZwdGBToddI8pDm48kPT1Nkx3ySqTQzCFwVjaPQEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2doWNX6v4NUZXVvq55gptTczsEhgvyXzBMRDIk3x86TC9JvwGh1qtNWvMhYKnvaKhbA/image-asset.jpeg?format=2500w"},
];

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}><img src={text}></img></div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class Gallery extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    scrollToSelected: false,
    selected: list[0].name,
    translate: 0,
    transition: 12,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  onLastItemVisible = () => {
    console.log("last item is visible");

    const newItems = Array(5)
      .fill(1)
      .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
    list = list.concat(newItems);
    this.menuItems = Menu(list, list.slice(-1)[0].name);
    this.setState({
      itemsCount: list.length,
      selected: this.state.selected
    });
  };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: "5px 10px"
    };
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };

    return (
      <div className="Gallery">
        {/* <header className="Gallery-header">
          <h1 className="Gallery-title">React horizontal scrolling menu</h1>
        </header>
        <p className="Gallery-intro">
          Horizontal scrolling menu example. Click arrow or drag items.
        </p> */}
        <ScrollMenu
          alignCenter={alignCenter}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />

        <form className="properties">
          <label style={checkboxStyle}>
            Align center
            <input
              name="alignCenter"
              type="checkbox"
              checked={alignCenter}
              onChange={() => this.setState({ alignCenter: !alignCenter })}
            />
          </label>
          <label style={checkboxStyle}>
            Dragging
            <input
              name="dragging"
              type="checkbox"
              checked={dragging}
              onChange={() => this.setState({ dragging: !dragging })}
            />
          </label>
          <label style={checkboxStyle}>
            Click when drag end
            <input
              name="clickWhenDrag"
              type="checkbox"
              checked={clickWhenDrag}
              onChange={() => this.setState({ clickWhenDrag: !clickWhenDrag })}
            />
          </label>
          <label style={checkboxStyle}>
            Use mouse wheel
            <input
              name="wheel"
              type="checkbox"
              checked={wheel}
              onChange={() => this.setState({ wheel: !wheel })}
            />
          </label>
          <label style={checkboxStyle}>
            Hide arrows if items width less than menu width
            <input
              name="hideArrows"
              type="checkbox"
              checked={hideArrows}
              onChange={() => this.setState({ hideArrows: !hideArrows })}
            />
          </label>
          <label style={checkboxStyle}>
            Hide left/right arrows if first/last item visible
            <input
              name="hideSingleArrow"
              type="checkbox"
              checked={hideSingleArrow}
              onChange={() =>
                this.setState({ hideSingleArrow: !hideSingleArrow })
              }
            />
          </label>
          <br />
          <div style={valueStyle}>Translate: {translate.toFixed(2)}</div>
          <label style={valueStyle}>
            Selected:
            <input
              style={{ margin: "0 5px" }}
              name="selected"
              type="text"
              value={selected}
              onChange={this.setSelected}
            />
          </label>
          <label style={valueStyle}>
            Transition duration:
            <input
              style={{ margin: "0 5px" }}
              name="transition"
              type="number"
              value={transition || 0}
              min={0}
              max={10}
              onChange={ev =>
                this.setState({
                  transition: !isNaN(ev.target.value) ? +ev.target.value : 0
                })
              }
            />
          </label>
          <label style={valueStyle}>
            Items count:
            <input
              style={{ margin: "0 5px" }}
              name="itemsCount"
              type="number"
              value={itemsCount}
              min={0}
              max={list.length}
              onChange={this.setItemsCount}
            />
          </label>
        </form>
        <hr />
        <div>
          <a
            /* eslint-disable react/jsx-no-target-blank */
            target="_blank"
            rel="noopener"
            href="https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu"
          >
            Side Scrolling Project by @asmyshlyaev177 on GitHub
          </a>
        </div>
      </div>
    );
  }
}
export default Gallery;
