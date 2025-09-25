import { IPTokenDeployed } from "../../generated/Launchpad/Launchpad"
import { Token } from "../../generated/schema"

export function handleIPTokenDeployed(event: IPTokenDeployed): void {
  let token = new Token(event.params.token.toHex())

  token.creator = event.params.tokenCreator
  token.name = event.params.name
  token.symbol = event.params.symbol
  token.createdAt = event.block.timestamp

  token.save()
}