export interface ICommand {
  COMMAND_NAME: string;
  run<T = undefined, R = undefined>(args?: T): Promise<CommandResult | R>;
}

export type CommandResult = {
  success: boolean;
  command: string;
  details: Record<string, unknown>;
};
