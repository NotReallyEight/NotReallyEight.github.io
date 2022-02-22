import { ChangeEvent, Component } from "react";
import { Switch } from "@mantine/core";

type DarkModeSwitchProps = {
  action(): void;
}

export default class DarkModeSwitch extends Component<DarkModeSwitchProps> {
  state = {
    darkModeEnabled:
      localStorage.getItem("darkmode") === "true" ||
      localStorage.getItem("darkmode") == null,
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
      <Switch
        checked={this.state.darkModeEnabled}
        color="yellow"
        offLabel={"Off"}
        onChange={(event) => {
          this.handleChange(event);
          this.props.action();
        }}
        onLabel={"On"}
        label={"Dark Mode"}
        m={10}
        size="md"
      ></Switch>
    );
  }
}
