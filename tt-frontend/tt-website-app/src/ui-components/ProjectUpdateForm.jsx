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
import { getProject } from "../graphql/queries";
import { updateProject } from "../graphql/mutations";
const client = generateClient();
export default function ProjectUpdateForm(props) {
  const {
    id: idProp,
    project: projectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    technologyclass: "",
    name: "",
    description: "",
    pagelink: "",
    coverimage: "",
  };
  const [technologyclass, setTechnologyclass] = React.useState(
    initialValues.technologyclass
  );
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [pagelink, setPagelink] = React.useState(initialValues.pagelink);
  const [coverimage, setCoverimage] = React.useState(initialValues.coverimage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectRecord
      ? { ...initialValues, ...projectRecord }
      : initialValues;
    setTechnologyclass(cleanValues.technologyclass);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setPagelink(cleanValues.pagelink);
    setCoverimage(cleanValues.coverimage);
    setErrors({});
  };
  const [projectRecord, setProjectRecord] = React.useState(projectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProject.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProject
        : projectModelProp;
      setProjectRecord(record);
    };
    queryData();
  }, [idProp, projectModelProp]);
  React.useEffect(resetStateValues, [projectRecord]);
  const validations = {
    technologyclass: [],
    name: [],
    description: [],
    pagelink: [{ type: "URL" }],
    coverimage: [{ type: "URL" }],
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
          technologyclass: technologyclass ?? null,
          name: name ?? null,
          description: description ?? null,
          pagelink: pagelink ?? null,
          coverimage: coverimage ?? null,
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
            query: updateProject.replaceAll("__typename", ""),
            variables: {
              input: {
                id: projectRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Technologyclass"
        isRequired={false}
        isReadOnly={false}
        value={technologyclass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              technologyclass: value,
              name,
              description,
              pagelink,
              coverimage,
            };
            const result = onChange(modelFields);
            value = result?.technologyclass ?? value;
          }
          if (errors.technologyclass?.hasError) {
            runValidationTasks("technologyclass", value);
          }
          setTechnologyclass(value);
        }}
        onBlur={() => runValidationTasks("technologyclass", technologyclass)}
        errorMessage={errors.technologyclass?.errorMessage}
        hasError={errors.technologyclass?.hasError}
        {...getOverrideProps(overrides, "technologyclass")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              technologyclass,
              name: value,
              description,
              pagelink,
              coverimage,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              technologyclass,
              name,
              description: value,
              pagelink,
              coverimage,
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
      <TextField
        label="Pagelink"
        isRequired={false}
        isReadOnly={false}
        value={pagelink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              technologyclass,
              name,
              description,
              pagelink: value,
              coverimage,
            };
            const result = onChange(modelFields);
            value = result?.pagelink ?? value;
          }
          if (errors.pagelink?.hasError) {
            runValidationTasks("pagelink", value);
          }
          setPagelink(value);
        }}
        onBlur={() => runValidationTasks("pagelink", pagelink)}
        errorMessage={errors.pagelink?.errorMessage}
        hasError={errors.pagelink?.hasError}
        {...getOverrideProps(overrides, "pagelink")}
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
              technologyclass,
              name,
              description,
              pagelink,
              coverimage: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || projectModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || projectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
