# Arnos

Arnos is a lightweight and flexible validation library made in Typescript!

## Installation

To use Arnos in your project, you can install it via npm or bun:

### npm

```bash
npm install arnos
```

### bun

```bash
bun install arnos
```

## Usage

```typescript
import { Arnos } from "./core/Arnos";

const valid = new Arnos({
    username: Arnos.string(),
    age: Arnos.number(),
    email: Arnos.email(),
    isActive: Arnos.boolean(),
    tags: Arnos.array(Arnos.string()).optional(),
    profile: Arnos.object({
        bio: Arnos.string(),
        website: Arnos.url(),
    }).optional(),
    joinDate: Arnos.date(),
    status: Arnos.enum('active', 'inactive', 'pending'),
});

const result = valid.validate({
    age: "30", // Invalid: should be a number
    email: 'invalid-email', // Invalid: should be a valid email
    isActive: true,
    profile: {
        bio: 'wow',
        website: 'http://itztiva.com',
    },
    joinDate: '2023-10-01', // Valid: should be a date
    status: 'active', // Valid: within the defined enum
});

if (result.isValid) {
    console.log('passed!');
} else {
    console.log('failed!', result.errors);
}
```

## Contributing

We welcome contributions to Arnos! If you'd like to help improve the library, please make a pull request.

---

Thank you for using Arnos! 