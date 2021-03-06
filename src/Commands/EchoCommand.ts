import Command from "eris-boreas/lib/src/conversation/Command";
import Conversation from "eris-boreas/lib/src/conversation/Conversation";

export default class EchoCommand implements Command {
  public aliases = ["echo"];
  public description = "Echoes the given text";
  public usage = "echo <text>";

  public async run(
    _conversation: Conversation,
    args: string[]
  ): Promise<string> {
    return args.slice(1).join(" ");
  }
}
