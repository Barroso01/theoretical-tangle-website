/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createStartup } from "../graphql/mutations";
const client = generateClient();
export default function StartupCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    logo: "",
    startupname: "",
    coverimage: "",
    verticals: "",
    description: "",
  };
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [startupname, setStartupname] = React.useState(
    initialValues.startupname
  );
  const [coverimage, setCoverimage] = React.useState(initialValues.coverimage);
  const [verticals, setVerticals] = React.useState(initialValues.verticals);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLogo(initialValues.logo);
    setStartupname(initialValues.startupname);
    setCoverimage(initialValues.coverimage);
    setVerticals(initialValues.verticals);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    logo: [{ type: "URL" }],
    startupname: [],
    coverimage: [{ type: "URL" }],
    verticals: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          logo,
          startupname,
          coverimage,
          verticals,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createStartup.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StartupCreateForm")}
      {...rest}
    >
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo: value,
              startupname,
              coverimage,
              verticals,
              description,
            };
            const result = onChange(modelFields);
            value = result?.logo ?? value;
          }
          if (errors.logo?.hasError) {
            runValidationTasks("logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("logo", logo)}
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        {...getOverrideProps(overrides, "logo")}
      ></TextField>
      <TextField
        label="Startupname"
        isRequired={false}
        isReadOnly={false}
        value={startupname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo,
              startupname: value,
              coverimage,
              verticals,
              description,
            };
            const result = onChange(modelFields);
            value = result?.startupname ?? value;
          }
          if (errors.startupname?.hasError) {
            runValidationTasks("startupname", value);
          }
          setStartupname(value);
        }}
        onBlur={() => runValidationTasks("startupname", startupname)}
        errorMessage={errors.startupname?.errorMessage}
        hasError={errors.startupname?.hasError}
        {...getOverrideProps(overrides, "startupname")}
      ></TextField>
      <TextField
        label="Coverimage"
        isRequired={false}
        isReadOnly={false}
        value={coverimage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo,
              startupname,
              coverimage: value,
              verticals,
              description,
            };
            const result = onChange(modelFields);
            value = result?.coverimage ?? value;
          }
          if (errors.coverimage?.hasError) {
            runValidationTasks("coverimage", value);
          }
          setCoverimage(value);
        }}
        onBlur={() => runValidationTasks("coverimage", coverimage)}
        errorMessage={errors.coverimage?.errorMessage}
        hasError={errors.coverimage?.hasError}
        {...getOverrideProps(overrides, "coverimage")}
      ></TextField>
      <TextField
        label="Verticals"
        isRequired={false}
        isReadOnly={false}
        value={verticals}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo,
              startupname,
              coverimage,
              verticals: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.verticals ?? value;
          }
          if (errors.verticals?.hasError) {
            runValidationTasks("verticals", value);
          }
          setVerticals(value);
        }}
        onBlur={() => runValidationTasks("verticals", verticals)}
        errorMessage={errors.verticals?.errorMessage}
        hasError={errors.verticals?.hasError}
        {...getOverrideProps(overrides, "verticals")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              logo,
              startupname,
              coverimage,
              verticals,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
