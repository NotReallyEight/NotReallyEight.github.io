import { ChangeEvent, Component } from "react";
import { Switch } from "@mantine/core";

export default class DarkModeSwitch extends Component {
  state = {
    darkModeEnabled: localStorage.getItem("darkmode") === "true",
  };
  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ darkModeEnabled: event.currentTarget.checked });
    localStorage.setItem(
      "darkmode",
      JSON.stringify(event.currentTarget.checked)
    );
  }

  render(): JSX.Element {
    return (
      <>
        <p>
          The dark mode is{" "}
          {this.state.darkModeEnabled ? "enabled" : "not enabled"}
        </p>
        <Switch
          checked={this.state.darkModeEnabled}
          color="yellow"
          offLabel={"Off"}
          onChange={(event) => this.handleChange(event)}
          onLabel={"On"}
          label={"Dark Mode"}
          m={10}
          size="md"
        ></Switch>
      </>
    );
  }
}
