import { BigInt, bigInt } from '@graphprotocol/graph-ts'
import { NewGravatar} from '../generated/Gravity/Gravity'
import { Gravatar } from '../generated/schema'

export function handleNewGravatar(event: NewGravatar): void {
  let id = event.params.sender
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
    gravatar.wallet = BigInt.zero()
    gravatar.wallet = gravatar.wallet.plus(BigInt.fromI32(1000000))

  }
  gravatar.wallet = gravatar.wallet.minus(event.params.money)
  gravatar.save()


  let id2 = event.params.receiver
  let gravatar2 = Gravatar.load(id2)
  if (gravatar2 == null) {
    gravatar2 = new Gravatar(id2)
    gravatar2.wallet = BigInt.zero()
    gravatar2.wallet = gravatar2.wallet.plus(BigInt.fromI32(1000000))
  }
  gravatar2.wallet = gravatar2.wallet.plus(event.params.money)
  gravatar2.save()
}


