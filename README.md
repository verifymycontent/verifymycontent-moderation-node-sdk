# VerifyMyContent Moderation Node SDK

## Installation

```bash
$ npm install verifymycontent-moderation-node-sdk --save
// or
$ yarn add verifymycontent-moderation-node-sdk
```

## Usage

```typescript
import { ModerationClient } from 'verifymycontent-video-moderation'
;(async function () {
  const Client = new ModerationClient({
    apiKey: 'YOUR_API_KEY',
    apiSecret: 'YOUR_API_SECRET',
    // url: "https://nucleus-moderation-sdx.verifymyage.com" // Sandbox
  })

  const moderation = await Client.createModeration({
    content: {
      id: 'YOUR-CONTENT-ID',
      url: 'https://...',
      type: 'video',
      title: 'My video',
      description: 'My description',
    },
    customer: {
      id: 'YOUR-CUSTOMER-ID',
      email: 'customer@email.com',
      // phone: '+1-555-555-5555', // (optional)
    },
    webhook: 'https://...',
  })

  console.log(
    `Moderation created: ${moderation.id} - Current status: ${moderation.status}`
  )

  setTimeout(() => {
    console.log(`Getting moderation ${moderation.id} after 5 seconds`)
    Client.getModeration(moderation.id).then((moderation) => {
      console.log(
        `Moderation ${moderation.id} after 5 seconds - Current status: ${moderation.status}`
      )
    })
  }, 5000)
})()
```

## Documentation

- [VerifyMyContent](https://verifymycontent.com)
- [Moderation API](https://docs.verifymyage.com/docs/content/moderation/index.html)
- [Moderation PHP SDK](https://github.com/verifymycontent/video-moderation)
