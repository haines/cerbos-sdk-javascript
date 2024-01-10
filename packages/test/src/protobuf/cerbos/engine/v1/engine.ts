/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Value } from "../../../google/protobuf/struct";
import { Effect, effectFromJSON } from "../../effect/v1/effect";
import { ValidationError } from "../../schema/v1/schema";

export const protobufPackage = "cerbos.engine.v1";

export interface PlanResourcesInput {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

export interface PlanResourcesInput_Resource {
  kind: string;
  attr: { [key: string]: any | undefined };
  policyVersion: string;
  scope: string;
}

export interface PlanResourcesInput_Resource_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface PlanResourcesFilter {
  kind: PlanResourcesFilter_Kind;
  condition: PlanResourcesFilter_Expression_Operand | undefined;
}

export enum PlanResourcesFilter_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ALWAYS_ALLOWED = 1,
  KIND_ALWAYS_DENIED = 2,
  KIND_CONDITIONAL = 3,
}

export function planResourcesFilter_KindFromJSON(
  object: any,
): PlanResourcesFilter_Kind {
  switch (object) {
    case 0:
    case "KIND_UNSPECIFIED":
      return PlanResourcesFilter_Kind.KIND_UNSPECIFIED;
    case 1:
    case "KIND_ALWAYS_ALLOWED":
      return PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED;
    case 2:
    case "KIND_ALWAYS_DENIED":
      return PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED;
    case 3:
    case "KIND_CONDITIONAL":
      return PlanResourcesFilter_Kind.KIND_CONDITIONAL;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesFilter_Kind",
      );
  }
}

export interface PlanResourcesFilter_Expression {
  operator: string;
  operands: PlanResourcesFilter_Expression_Operand[];
}

export interface PlanResourcesFilter_Expression_Operand {
  node?:
    | { $case: "value"; value: any | undefined }
    | { $case: "expression"; expression: PlanResourcesFilter_Expression }
    | { $case: "variable"; variable: string }
    | undefined;
}

export interface PlanResourcesOutput {
  requestId: string;
  action: string;
  kind: string;
  policyVersion: string;
  scope: string;
  filter: PlanResourcesFilter | undefined;
  filterDebug: string;
  validationErrors: ValidationError[];
}

export interface CheckInput {
  requestId: string;
  resource: Resource | undefined;
  principal: Principal | undefined;
  actions: string[];
  auxData: AuxData | undefined;
}

export interface CheckOutput {
  requestId: string;
  resourceId: string;
  actions: { [key: string]: CheckOutput_ActionEffect };
  effectiveDerivedRoles: string[];
  validationErrors: ValidationError[];
  outputs: OutputEntry[];
}

export interface CheckOutput_ActionEffect {
  effect: Effect;
  policy: string;
  scope: string;
}

export interface CheckOutput_ActionsEntry {
  key: string;
  value: CheckOutput_ActionEffect | undefined;
}

export interface OutputEntry {
  src: string;
  val: any | undefined;
}

export interface Resource {
  kind: string;
  policyVersion: string;
  id: string;
  attr: { [key: string]: any | undefined };
  scope: string;
}

export interface Resource_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface Principal {
  id: string;
  policyVersion: string;
  roles: string[];
  attr: { [key: string]: any | undefined };
  scope: string;
}

export interface Principal_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface AuxData {
  jwt: { [key: string]: any | undefined };
}

export interface AuxData_JwtEntry {
  key: string;
  value: any | undefined;
}

function createBasePlanResourcesInput(): PlanResourcesInput {
  return {
    requestId: "",
    action: "",
    principal: undefined,
    resource: undefined,
    auxData: undefined,
    includeMeta: false,
  };
}

export const PlanResourcesInput = {
  encode(
    message: PlanResourcesInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      PlanResourcesInput_Resource.encode(
        message.resource,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    if (message.includeMeta === true) {
      writer.uint32(48).bool(message.includeMeta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.principal = Principal.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resource = PlanResourcesInput_Resource.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auxData = AuxData.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.includeMeta = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesInput {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? PlanResourcesInput_Resource.fromJSON(object.resource)
        : undefined,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? globalThis.Boolean(object.includeMeta)
        : false,
    };
  },
};

function createBasePlanResourcesInput_Resource(): PlanResourcesInput_Resource {
  return { kind: "", attr: {}, policyVersion: "", scope: "" };
}

export const PlanResourcesInput_Resource = {
  encode(
    message: PlanResourcesInput_Resource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        PlanResourcesInput_Resource_AttrEntry.encode(
          { key: key as any, value },
          writer.uint32(18).fork(),
        ).ldelim();
      }
    });
    if (message.policyVersion !== "") {
      writer.uint32(26).string(message.policyVersion);
    }
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesInput_Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesInput_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = PlanResourcesInput_Resource_AttrEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.attr[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesInput_Resource {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },
};

function createBasePlanResourcesInput_Resource_AttrEntry(): PlanResourcesInput_Resource_AttrEntry {
  return { key: "", value: undefined };
}

export const PlanResourcesInput_Resource_AttrEntry = {
  encode(
    message: PlanResourcesInput_Resource_AttrEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesInput_Resource_AttrEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesInput_Resource_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesInput_Resource_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBasePlanResourcesFilter(): PlanResourcesFilter {
  return { kind: 0, condition: undefined };
}

export const PlanResourcesFilter = {
  encode(
    message: PlanResourcesFilter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.condition !== undefined) {
      PlanResourcesFilter_Expression_Operand.encode(
        message.condition,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesFilter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.condition = PlanResourcesFilter_Expression_Operand.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesFilter {
    return {
      kind: isSet(object.kind)
        ? planResourcesFilter_KindFromJSON(object.kind)
        : 0,
      condition: isSet(object.condition)
        ? PlanResourcesFilter_Expression_Operand.fromJSON(object.condition)
        : undefined,
    };
  },
};

function createBasePlanResourcesFilter_Expression(): PlanResourcesFilter_Expression {
  return { operator: "", operands: [] };
}

export const PlanResourcesFilter_Expression = {
  encode(
    message: PlanResourcesFilter_Expression,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    for (const v of message.operands) {
      PlanResourcesFilter_Expression_Operand.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesFilter_Expression {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesFilter_Expression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operands.push(
            PlanResourcesFilter_Expression_Operand.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesFilter_Expression {
    return {
      operator: isSet(object.operator)
        ? globalThis.String(object.operator)
        : "",
      operands: globalThis.Array.isArray(object?.operands)
        ? object.operands.map((e: any) =>
            PlanResourcesFilter_Expression_Operand.fromJSON(e),
          )
        : [],
    };
  },
};

function createBasePlanResourcesFilter_Expression_Operand(): PlanResourcesFilter_Expression_Operand {
  return { node: undefined };
}

export const PlanResourcesFilter_Expression_Operand = {
  encode(
    message: PlanResourcesFilter_Expression_Operand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    switch (message.node?.$case) {
      case "value":
        Value.encode(
          Value.wrap(message.node.value),
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "expression":
        PlanResourcesFilter_Expression.encode(
          message.node.expression,
          writer.uint32(18).fork(),
        ).ldelim();
        break;
      case "variable":
        writer.uint32(26).string(message.node.variable);
        break;
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesFilter_Expression_Operand {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesFilter_Expression_Operand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.node = {
            $case: "value",
            value: Value.unwrap(Value.decode(reader, reader.uint32())),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.node = {
            $case: "expression",
            expression: PlanResourcesFilter_Expression.decode(
              reader,
              reader.uint32(),
            ),
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.node = { $case: "variable", variable: reader.string() };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesFilter_Expression_Operand {
    return {
      node: isSet(object.value)
        ? { $case: "value", value: object.value }
        : isSet(object.expression)
          ? {
              $case: "expression",
              expression: PlanResourcesFilter_Expression.fromJSON(
                object.expression,
              ),
            }
          : isSet(object.variable)
            ? {
                $case: "variable",
                variable: globalThis.String(object.variable),
              }
            : undefined,
    };
  },
};

function createBasePlanResourcesOutput(): PlanResourcesOutput {
  return {
    requestId: "",
    action: "",
    kind: "",
    policyVersion: "",
    scope: "",
    filter: undefined,
    filterDebug: "",
    validationErrors: [],
  };
}

export const PlanResourcesOutput = {
  encode(
    message: PlanResourcesOutput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.kind !== "") {
      writer.uint32(26).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(34).string(message.policyVersion);
    }
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    if (message.filter !== undefined) {
      PlanResourcesFilter.encode(
        message.filter,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.filterDebug !== "") {
      writer.uint32(58).string(message.filterDebug);
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanResourcesOutput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.filter = PlanResourcesFilter.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.filterDebug = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesOutput {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      filter: isSet(object.filter)
        ? PlanResourcesFilter.fromJSON(object.filter)
        : undefined,
      filterDebug: isSet(object.filterDebug)
        ? globalThis.String(object.filterDebug)
        : "",
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },
};

function createBaseCheckInput(): CheckInput {
  return {
    requestId: "",
    resource: undefined,
    principal: undefined,
    actions: [],
    auxData: undefined,
  };
}

export const CheckInput = {
  encode(
    message: CheckInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Principal.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actions) {
      writer.uint32(34).string(v!);
    }
    if (message.auxData !== undefined) {
      AuxData.encode(message.auxData, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.principal = Principal.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.actions.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.auxData = AuxData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckInput {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => globalThis.String(e))
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },
};

function createBaseCheckOutput(): CheckOutput {
  return {
    requestId: "",
    resourceId: "",
    actions: {},
    effectiveDerivedRoles: [],
    validationErrors: [],
    outputs: [],
  };
}

export const CheckOutput = {
  encode(
    message: CheckOutput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckOutput_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.outputs) {
      OutputEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckOutput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = CheckOutput_ActionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.actions[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.effectiveDerivedRoles.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.outputs.push(OutputEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckOutput {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      resourceId: isSet(object.resourceId)
        ? globalThis.String(object.resourceId)
        : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{
            [key: string]: CheckOutput_ActionEffect;
          }>((acc, [key, value]) => {
            acc[key] = CheckOutput_ActionEffect.fromJSON(value);
            return acc;
          }, {})
        : {},
      effectiveDerivedRoles: globalThis.Array.isArray(
        object?.effectiveDerivedRoles,
      )
        ? object.effectiveDerivedRoles.map((e: any) => globalThis.String(e))
        : [],
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => OutputEntry.fromJSON(e))
        : [],
    };
  },
};

function createBaseCheckOutput_ActionEffect(): CheckOutput_ActionEffect {
  return { effect: 0, policy: "", scope: "" };
}

export const CheckOutput_ActionEffect = {
  encode(
    message: CheckOutput_ActionEffect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.effect !== 0) {
      writer.uint32(8).int32(message.effect);
    }
    if (message.policy !== "") {
      writer.uint32(18).string(message.policy);
    }
    if (message.scope !== "") {
      writer.uint32(26).string(message.scope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckOutput_ActionEffect {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckOutput_ActionEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.effect = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policy = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckOutput_ActionEffect {
    return {
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      policy: isSet(object.policy) ? globalThis.String(object.policy) : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },
};

function createBaseCheckOutput_ActionsEntry(): CheckOutput_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckOutput_ActionsEntry = {
  encode(
    message: CheckOutput_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckOutput_ActionEffect.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckOutput_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckOutput_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CheckOutput_ActionEffect.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckOutput_ActionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? CheckOutput_ActionEffect.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseOutputEntry(): OutputEntry {
  return { src: "", val: undefined };
}

export const OutputEntry = {
  encode(
    message: OutputEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.val !== undefined) {
      Value.encode(Value.wrap(message.val), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutputEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.src = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.val = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputEntry {
    return {
      src: isSet(object.src) ? globalThis.String(object.src) : "",
      val: isSet(object?.val) ? object.val : undefined,
    };
  },
};

function createBaseResource(): Resource {
  return { kind: "", policyVersion: "", id: "", attr: {}, scope: "" };
}

export const Resource = {
  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(18).string(message.policyVersion);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        Resource_AttrEntry.encode(
          { key: key as any, value },
          writer.uint32(34).fork(),
        ).ldelim();
      }
    });
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Resource_AttrEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.attr[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },
};

function createBaseResource_AttrEntry(): Resource_AttrEntry {
  return { key: "", value: undefined };
}

export const Resource_AttrEntry = {
  encode(
    message: Resource_AttrEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource_AttrEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBasePrincipal(): Principal {
  return { id: "", policyVersion: "", roles: [], attr: {}, scope: "" };
}

export const Principal = {
  encode(
    message: Principal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.policyVersion !== "") {
      writer.uint32(18).string(message.policyVersion);
    }
    for (const v of message.roles) {
      writer.uint32(26).string(v!);
    }
    Object.entries(message.attr).forEach(([key, value]) => {
      if (value !== undefined) {
        Principal_AttrEntry.encode(
          { key: key as any, value },
          writer.uint32(34).fork(),
        ).ldelim();
      }
    });
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.roles.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Principal_AttrEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.attr[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Principal {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => globalThis.String(e))
        : [],
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },
};

function createBasePrincipal_AttrEntry(): Principal_AttrEntry {
  return { key: "", value: undefined };
}

export const Principal_AttrEntry = {
  encode(
    message: Principal_AttrEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Principal_AttrEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrincipal_AttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Principal_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseAuxData(): AuxData {
  return { jwt: {} };
}

export const AuxData = {
  encode(
    message: AuxData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.jwt).forEach(([key, value]) => {
      if (value !== undefined) {
        AuxData_JwtEntry.encode(
          { key: key as any, value },
          writer.uint32(10).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = AuxData_JwtEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.jwt[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuxData {
    return {
      jwt: isObject(object.jwt)
        ? Object.entries(object.jwt).reduce<{ [key: string]: any | undefined }>(
            (acc, [key, value]) => {
              acc[key] = value as any | undefined;
              return acc;
            },
            {},
          )
        : {},
    };
  },
};

function createBaseAuxData_JwtEntry(): AuxData_JwtEntry {
  return { key: "", value: undefined };
}

export const AuxData_JwtEntry = {
  encode(
    message: AuxData_JwtEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxData_JwtEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxData_JwtEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuxData_JwtEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
