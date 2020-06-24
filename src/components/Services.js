import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus massa ac neque bibendum vulputate. Phasellus euismod erat vitae nulla fringilla, vitae dapibus neque tempor.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus massa ac neque bibendum vulputate. Phasellus euismod erat vitae nulla fringilla, vitae dapibus neque tempor.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus massa ac neque bibendum vulputate. Phasellus euismod erat vitae nulla fringilla, vitae dapibus neque tempor.",
      },
      {
        icon: <FaBeer />,
        title: "strongest Beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus massa ac neque bibendum vulputate. Phasellus euismod erat vitae nulla fringilla, vitae dapibus neque tempor.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
