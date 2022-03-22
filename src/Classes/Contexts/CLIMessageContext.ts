import BaseFrontend from "../Frontends/BaseFrontend";
import BaseMessageContext from "./BaseMessageContext";

export default class CLIMessageContext extends BaseMessageContext {
  private bufferedMessage: string;

  constructor(message: string, id: string, frontend: BaseFrontend) {
    super(message, id, frontend);
    this.bufferedMessage = "";
  }

  async _reply(message: string): Promise<any> {
    this.bufferedMessage += message + "\n";
    return;
  }

  close(): void {
    super.close();
    process.stdout.write(this.bufferedMessage);
    this.bufferedMessage = "";
    return;
  }
}
