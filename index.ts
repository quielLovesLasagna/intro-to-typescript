// Common Types

// string
// number
// boolean

const someName: string = "kjhjasjkdhajksd";
const someNumber: number = 123;
const someBoolean: boolean = true;

// Other Types

// any
// unknown
// Array | []
// Object

const someAny: any = { id: 123 };
const someUnknown: unknown = { id: 123 };
const someArray: number[] = [1, 2, 3, 4, 5];
const someObject: object = { id: 123 };

// Tuples

type SomeTuple = [string, number, boolean];

const someTuple: SomeTuple = ["someString", 123, true];

// type vs interface
type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Admin = Person & {
  role: "Admin";
};

const admin1 = {} as Admin;
const person1: Person = { name: "John Doe", age: 23 };

// =========
interface IPerson {
  name: string;
  age: number;
}

interface IAdmin extends IPerson {
  role: "Admin";
}

const admin2 = {} as IAdmin;
const person2: IPerson = { name: "John Doe", age: 23 };

// Enums
enum Role {
  Admin = "admin",
  User = "user",
}

const adminRole: Role = Role.User;

// Const Enums
const Roles = {
  Admin: "admin",
  User: "user",
} as const;

type RoleKey = keyof typeof Roles;
type RoleValue = (typeof Roles)[RoleKey];

const roleValue: RoleValue = "admin";
const roleKey: RoleKey = "User";

const fruits = ["apple", "banana", "orange"] as const;

type Fruit = (typeof fruits)[number];

// Union Types
// type JowaType = 'ex' | 'current' | 'kabit'
type SomeUnion = string | number | boolean;
// type Permission = SuperAdmin | User | Admin

// Casting

const someCasting = "123" as unknown as number;

// Functions

const someFunction = (name: string, age: number) => {
  return `Hello, ${name}! You are ${age} years old.`;
};

someFunction("Rodrick", 123);

// Utility Types

// Record

type SomeRecord = Record<string, number | string>;

const someRecord = {
  name: "bossROD",
  age: 123,
} satisfies SomeRecord;

// Partial

type SomePartial = Partial<IPerson>;

// Required

type SomeRequired = Required<SomePartial>;

// Omit

type SomeOmit = Omit<IPerson, "age">;

// Exclude

type ProgrammingLanguage =
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "Java"
  | "C#";
type SomeExclude = Exclude<ProgrammingLanguage, "TypeScript">;

// Pick

type SomePick = Pick<IPerson, "age" | "name">;

// Readonly

type SomeReadonly = Readonly<IPerson>;

// ReturnType

function getPerson() {
  return {
    id: 1,
    name: "John Doe",
    age: 23,
  };
}

const currentPerson = getPerson();

type GetPersonType = ReturnType<typeof getPerson>;

// Awaited

async function fetchPerson() {
  const data = {
    id: 1,
    name: "John Doe",
    age: 23,
  };

  return new Promise<typeof data>((resolve) => {
    resolve(data);
  });
}

type FetchPersonType = Awaited<ReturnType<typeof fetchPerson>>;

const currentFetchedPerson = {} as FetchPersonType;

// Generics

type SomeGeneric<TData> = {
  data: TData;
};

const someGenericString: SomeGeneric<string> = { data: "asdkjhjkahsd" };
